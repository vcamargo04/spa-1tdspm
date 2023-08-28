export default function App(){
  return (
    <>
    <div className="container">
    {/* Isso é um comentario */}
    {/* Vamos criar um cabeçalho com um header, um h1 com um titulo e uma lista ul com 3 itens com link */}

    <header>
      <h1>
        <ul>
          <li><a href="#"></a>Item-1</li>
          <li><a href="#"></a>Item-2</li>
          <li><a href="#"></a>Item-3</li>
        </ul>
      </h1>
    </header>

    {/* Vamos criar uma seção com uma div, com 3 <p> </p> vão ter 3 linhas de lorem, abaixo dos <p> </p> uma img */}
    <section>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad facilis quos aliquam iste doloribus vitae debitis fuga, perspiciatis atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam molestias repellat necessitatibus vel nulla consequatur ex assumenda, impedit eligendi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat necessitatibus, odio libero dolore assumenda odit commodi eligendi quod non?</p>
      </div>
      <img src="" alt="" />
    </section>
    {/* Vamos criar um rodapé com uma div */}
    <footer>
      <div>
        <ul>
          <li><a href="#">Github</a></li>
          <li><a href="#">X</a></li>
          <li><a href="#">Reddit</a></li>
        </ul>
        <p>&copy; Todos os direitos reservados - 2023</p>
      </div>
    </footer>
    </div>
    </>
  )
}