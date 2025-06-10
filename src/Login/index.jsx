import { useState } from "react"
import { AreaLogin, BaseBackground, ContentLogin, ImagemLogin, Inputs, MainContent } from "./styles"
import { useNavigate } from "react-router-dom"

function LoginUser() {
  const [seePassword, setSeePassword] = useState(false)
  const [fade, setFade] = useState('fade-in');
  const navigate = useNavigate();

  function redirect() {
    setFade('fade-out');
    setTimeout(() => {
      navigate('/eventos');
    }, 300);
  }

  return (
    <BaseBackground>
      <MainContent className={fade}>
        <AreaLogin>
          <ContentLogin>
            <div className="logo">
              <img src="/login/logo-tropa-login.png" alt="" />
            </div>
            <div className="text">
              <text>Bem-vindo de volta</text><br /><span>Entre com sua conta para acessar o painel.</span>
            </div>
            <Inputs>
              <div className="input">
                <label htmlFor="email">E-mail</label>
                <input placeholder="seunome@gmail.com" name="email" type="text" />
              </div>
              <div className="senha">
                <label htmlFor="senha">Senha</label>
                <div>
                  <input placeholder="Digite aqui" name="senha" type={seePassword ? 'input' : 'password'} />
                  <img onClick={() => setSeePassword(!seePassword)} src="/login/visualiza-senha.png" alt="" />
                </div>
              </div>
              <button onClick={() => redirect()}>Enviar</button>
            </Inputs>
          </ContentLogin>
        </AreaLogin>
        <ImagemLogin>
          <img src="/login/imagem-login.png" alt="" />
          <div></div>
        </ImagemLogin>
      </MainContent>
    </BaseBackground>
  )
}

export default LoginUser
