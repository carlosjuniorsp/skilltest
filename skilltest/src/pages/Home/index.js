import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import ReactLoading from "react-loading";
import { list } from "../../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  useEffect(() => {
    listUser();
  }, []);

  function listUser() {
    api
      .get("/api/user-list")
      .then((response) => {
        setLoading(false);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  function deleteUser(id) {
    api
      .delete("/api/user-delete/" + id)
      .then(function () {
        setLoading(true);
      })
      .then(() => {
        listUser();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  return (
    <>
      <Header title="Usuários" />
      <main>
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
                    ) : (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-indigo-700">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Nome
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Idade
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              CPF
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Cidade
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Estado
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Estado Civil
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Ações
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {user.length > 0 ? (
                            user.map((users) => {
                              return (
                                <tr key={users.email}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="text-sm font-medium text-gray-900">
                                        {users.name}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {users.age}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {users.cpf}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {users.city}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {users.state}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {users.marital_status}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      <a
                                        href="/"
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Editar
                                      </a>
                                      &nbsp; | &nbsp;
                                      <a
                                        onClick={() => deleteUser(users.id)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Excluir
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <h2 className="text-gray-500 px-6 py-3">
                              Não temos nenhum registro para exibir
                            </h2>
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
