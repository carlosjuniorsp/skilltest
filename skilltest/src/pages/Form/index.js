import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import { list } from "../../components/Loading";
import api from "../../services/api";
//import { cpfMask } from "../../components/Mask";

export default function Form() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    age: "",
    city: "",
    cpf: "",
    id: "",
    marital_status: "",
    name: "",
    state: "",
  });
  useEffect(() => {
    setLoading(true);
    api
      .get("/api/user-list/" + params.id)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setForm(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }, []);
  function sendForm(e) {
    //setLoading(true);
    e.preventDefault();
    api
      .post("/api/user-update/" + params.id, {
        form,
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }
  return (
    <>
      <Header
        title={
          params.edit == "edit" ? "Edição de usuário" : "Cadastro de usuários"
        }
      />
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
                  ) : form ? (
                    <>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => sendForm(e)}
                      >
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
                                  value={form.name || ""}
                                  onChange={({ currentTarget: { value } }) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      name: value,
                                    }))
                                  }
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
                                  type="text"
                                  name="cpf"
                                  value={form.cpf || ""}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      cpf: e.target.value,
                                    }))
                                  }
                                  maxLength="14"
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
                                  value={form.age}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      age: e.target.value,
                                    }))
                                  }
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
                                  value={form.marital_status}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      marital_status: e.target.value,
                                    }))
                                  }
                                  name="marital-status"
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="Casado(a)">Casado(a)</option>
                                  <option value="Solteiro(a)">
                                    Solteiro(a)
                                  </option>
                                  <option value="Divorciado(a)">
                                    Divorciado(a)
                                  </option>
                                  <option value="Viúvo(a)">Viúvo(a)</option>
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
                                  value={form.city}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      city: e.target.value,
                                    }))
                                  }
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="Suzano">Suzano</option>
                                  <option value="Poá">Poá</option>
                                  <option value="Mogi">Mogi</option>
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
                                  value={form.state}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      state: e.target.value,
                                    }))
                                  }
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
};
