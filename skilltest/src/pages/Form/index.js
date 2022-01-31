import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
//import api from "../../services/api";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import { list } from "../../components/Loading";
import api from "../../services/api";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const userId = useParams();
  function userList(userId) {
    api
      .get("/api/user-list/" + userId)
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  useEffect(() => {
    setLoading(true);
    userList(userId.id);
  }, []);
  return (
    <>
      <Header title="Cadastro de usuários" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {loading ? (
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <ReactLoading type={list.spin} color="#4338ca" />
                    </div>
                  ) : users ? (
                    <>
                      <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-12 gap-6">
                              <div className="col-span-6 sm:col-span-5">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Nome
                                </label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  value={users.name}
                                  autoComplete="given-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="cpf"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  CPF
                                </label>
                                <input
                                  type="number"
                                  name="cpf"
                                  value={users.cpf}
                                  id="cpf"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="age"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Idade
                                </label>
                                <input
                                  type="number"
                                  name="age"
                                  value={users.age}
                                  id="age"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="marital-status"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Estado civil
                                </label>
                                <select
                                  id="marital-status"
                                  value={users.material_status}
                                  name="marital-status"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Casado(a)</option>
                                  <option>Solteiro(a)</option>
                                  <option>Divorciado(a)</option>
                                  <option>Viúvo(a)</option>
                                </select>
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Cidade
                                </label>
                                <select
                                  id="city"
                                  name="city"
                                  value={users.city}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>Suzano</option>
                                  <option>Poá</option>
                                  <option>Mogi</option>
                                </select>
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="state"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Estado
                                </label>
                                <select
                                  id="state"
                                  name="state"
                                  value={users.state}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option>SP</option>
                                  <option>MG</option>
                                  <option>RJ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Salvar
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  ) : (
                    <h2 className="text-gray-500 px-6 py-3">
                      Não temos nenhum registro para exibir
                    </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Form.propTypes = {
  action: PropTypes.string,
  users: PropTypes.object,
};
