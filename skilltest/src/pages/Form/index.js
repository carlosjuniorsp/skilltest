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
  const [form, setForm] = useState({});
  async function getBusinessList() {
    await api
      .get("/api/business-list/" + params.id)
      .then((response) => {
        setForm(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response.data.error);
      });
  }
  function sendForm(e) {
    setLoading(true);
    e.preventDefault();
    api
      .post("/api/business-update/" + params.id, {
        form,
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response.data.error);
      });
  }
  useEffect(() => {
    setLoading(true);
    getBusinessList();
  }, []);
  return (
    <>
      <Header
        title={
          params.edit == "edit" ? "Edição da empresa" : "Cadastro de empresa"
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
                          <div className="px-4 py-10 bg-white sm:p-6">
                            <div className="grid grid-cols-1">
                              <div className="col-span-6 sm:col-span-5">
                                <label
                                  htmlFor="business"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Empresa
                                </label>
                                <input
                                  type="text"
                                  name="business"
                                  id="business"
                                  value={form.business || ""}
                                  onChange={({ currentTarget: { value } }) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      business: value,
                                    }))
                                  }
                                  autoComplete="given-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="phone"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Telefone
                                </label>
                                <input
                                  type="text"
                                  name="phone"
                                  value={form.phone || ""}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      phone: e.target.value,
                                    }))
                                  }
                                  maxLength="14"
                                  id="telefone"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="url"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Url
                                </label>
                                <input
                                  type="text"
                                  name="url"
                                  disabled
                                  value={form.url}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      url: e.target.value,
                                    }))
                                  }
                                  id="age"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Mensagem automática do link
                                </label>
                                <textarea
                                  type="text"
                                  name="description"
                                  placeholder="Olá, gostaria de um orçamento!"
                                  value={form.description}
                                  onChange={(e) =>
                                    setForm((prevState) => ({
                                      ...prevState,
                                      description: e.target.value,
                                    }))
                                  }
                                  id="age"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                ></textarea>
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
