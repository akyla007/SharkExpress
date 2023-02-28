import "./App.scss";
import Whey from "./assets/whey.png";
import Creatina from "./assets/creatina.png"
import Pretreino from "./assets/pretreino.png"
import Amendoin from "./assets/pasta-amendoin.png"

const produtos = [
  {
    id:1,
    titulo: "Whey Protein",
    img: Whey,
    descricao:
      "O whey protein é um suplemento alimentar muito popular entre aqueles que praticam atividades físicas e desejam aumentar a massa muscular. Ele é uma proteína completa e de alta qualidade, extraída do soro do leite durante o processo de fabricação do queijo.",
  },
  {
    id:2,
    titulo: "Creatina",
    img: Creatina,
    descricao:
      "A creatina é um suplemento alimentar muito popular entre aqueles que praticam atividades físicas e desejam aumentar a força, o desempenho e a massa muscular. Ela é uma substância natural produzida pelo corpo a partir dos aminoácidos arginina, glicina e metionina, e também pode ser obtida através da alimentação, principalmente de carnes vermelhas.",
  },
  {
    id:3,
    titulo: "Pré-treino",
    img: Pretreino,
    descricao:
      "Pré-treino é um suplemento alimentar formulado com ingredientes que ajudam a aumentar a energia, o foco e a resistência física durante o exercício. Ele é projetado para ser tomado antes do treino, a fim de melhorar o desempenho, maximizar os resultados e acelerar a recuperação.",
  },
  {
    id:4,
    titulo: "Pasta Amendoin",
    img: Amendoin,
    descricao:
      "A pasta de amendoim é um alimento altamente nutritivo e popular entre aqueles que frequentam a academia. Ela é uma excelente fonte de proteína, gorduras saudáveis, fibras e vitaminas e minerais essenciais, como vitamina E, magnésio e potássio.",
  },
];

function App() {
  return (
    <div className="App">
      {produtos.map((produto, id) => {
        return (
          <section className="container" key={id}>
            <img
              src={produto.img}
              alt="WheyProtein"
              className="imagemProduto"
            />
            <div className="containerProduto">
              <h1 className="tituloProduto">{produto.titulo}</h1>
              <p className="descricaoProduto">{produto.descricao}</p>
              <a href="#" className="botaoComprar">
                Compre agora!
              </a>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
