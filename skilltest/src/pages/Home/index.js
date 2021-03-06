import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import ReactLoading from "react-loading";
import { list } from "../../components/Loading";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idUser, setIdUser] = useState(0);
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    listBusiness();
  }, []);

  function listBusiness() {
    setLoading(true);
    api
      .get("/api/business-list")
      .then((response) => {
        setLoading(false);
        setBusiness(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function deleteUser(id) {
    api
      .delete("/api/user-delete/" + id)
      .then(() => {
        setLoading(true);
      })
      .then(() => {
        setLoading(false);
        listBusiness();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
      <Header title="Empresas cadastradas" />
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
                              Nome da empresa
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Telefone
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              Url
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                            >
                              A????es
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {business.length > 0 ? (
                            business.map((data) => {
                              return (
                                <tr key={data.email}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="text-sm font-medium text-gray-900">
                                        {data.business}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {data.phone}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {data.description}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {data.url}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      <a
                                        href={"/form/edit/" + data.id}
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Editar
                                      </a>
                                      &nbsp; | &nbsp;
                                      <a
                                        onClick={() => {
                                          setOpenModal(true);
                                          setIdUser(data.id);
                                        }}
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
                              N??o temos nenhum registro para exibir
                            </h2>
                          )}
                        </tbody>
                      </table>
                    )}
                    {openModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Excluir usu??rio?
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setOpenModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ??
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                  Voc?? tem certeza que deseja excluir o usu??rio?
                                  Esta ?? uma a????o permanente e n??o poder?? ser
                                  desfeita.
                                </p>
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setOpenModal(false)}
                                >
                                  Cancelar
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => {
                                    setOpenModal(false);
                                    deleteUser(idUser);
                                  }}
                                >
                                  Excluir
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
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
