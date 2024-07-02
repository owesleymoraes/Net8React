import { useQuery } from "react-query";
import { getAll } from "../../../services/students/getStudentService";
import { StudentResponse } from "../../../domain/student";
import logo from "../../../../assets/logo.png";

export const Home = () => {
  const { data, error, isLoading } = useQuery<StudentResponse[], Error>(
    ["getAll"],
    () => getAll(),
    {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <body className="flex w-full">
      <section className="w-full">
        <h3 className="text-center p-6 text-3xl">Cadatro de alunos</h3>
        <div className="flex items-center mb-7 w-4/5 ml-auto mr-auto ">
          <img src={logo} alt="logo_cadastro" className="w-14 h-14 " />
          <button className="py-2 px-3 bg-lime-600 ml-4 rounded-md text-white font-semibold">
            Incluir novo Aluno
          </button>
        </div>
        <table className="border-2 w-4/5 ml-auto mr-auto text-center">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Id</th>
              <th className="px-4 py-2 border">Nome</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Idade</th>
              <th className="px-4 py-2 border">Operação</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, key) => (
              <tr key={key} className="even:bg-gray-100">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.email}</td>
                <td className="px-4 py-2 border">{item.age}</td>
                <td className="px-4 py-2 border">
                  <button className="py-1 px-2 bg-blue-600 ml-2 rounded-md text-white font-semibold">
                    Editar
                  </button>
                  <button className="py-1 px-2 bg-red-600 ml-2 rounded-md text-white font-semibold">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </body>
  );
};
