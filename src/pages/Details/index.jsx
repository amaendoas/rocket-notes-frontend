import { Container, Links, Content } from "./styles.js"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tags } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"


export function Details() {

  return (
    <>
    <Container>
    <Header/>
    <main>
      <Content>
    <ButtonText title="Excluir nota"/>
    <h1>Introdução ao React</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde est totam eveniet exercitationem commodi perferendis dolor natus ipsum reprehenderit. Magnam ullam recusandae dignissimos aliquid eos veniam obcaecati, deleniti quia illum sequi, accusantium officia dolorum. Architecto laudantium recusandae inventore minus nesciunt quia sunt, culpa soluta libero deserunt obcaecati, illo aspernatur ducimus dicta tempora magnam. Fugiat, repellat maxime ipsa eveniet recusandae iste nihil explicabo cumque temporibus placeat sed animi quo expedita fugit dignissimos, eaque nemo architecto unde vero, similique commodi neque nulla? Sequi harum iste libero, totam adipisci obcaecati sint vero quos unde vitae porro, repudiandae modi error? Explicabo, repellat. Quibusdam?</p>
    <Section title="Links úteis">
      <Links>
        <li><a href="">https://www.rocketseat.com.br/</a></li>
        <li><a href="">https://www.rocketseat.com.br/</a></li>
      </Links>
    </Section>

    <Section title="Marcadores">
      <Tags title="express"/>
      <Tags title="nodejs"/>
    </Section>
    <Button title="Voltar"/>         
    </Content>
    </main>   
    </Container>
    </>
  )
}