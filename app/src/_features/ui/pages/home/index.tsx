export const Home = () => {
  return (
    <div className="">
      <h3>Cadatro de alunos</h3>
      <header>
        <img src={""} alt="logo_cadastro" />
        <button className="button-success">Incluir novo Aluno</button>
      </header>
      <table className="">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
