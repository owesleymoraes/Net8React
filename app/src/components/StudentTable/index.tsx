import { StudentResponse } from "../../_features/domain/student";
import { Button } from "../Button";

interface StudentTableProps {
  students: StudentResponse[] | undefined;
}

export const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <>
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
          {students?.map((item, key) => (
            <tr key={key} className="even:bg-gray-100">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.name}</td>
              <td className="px-4 py-2 border">{item.email}</td>
              <td className="px-4 py-2 border">{item.age}</td>
              <td className="px-4 py-2 border">
                <Button typeButton="success" onClick={() => {}}>
                  Editar
                </Button>
                <Button typeButton="error" onClick={() => {}}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
