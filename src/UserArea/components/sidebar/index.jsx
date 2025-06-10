import { ButtonMenuUser, ButtonPagination } from "../buttonPagination"
import { InteractionArea, LeftMenu } from "./styles/styles"

function Sidebar() {

    return (
        <LeftMenu>
            <div className="logo">
                <img src="/sidebar/logo-tropa-dashboard.png" alt="" />
            </div>
            <InteractionArea>
                <div className="pagination">
                    <div className="title"><text>MENU</text></div>
                    <ButtonPagination src={'/sidebar/buttonPagination-dashboard.png'} alt={'dashboard'} title={'Dashboard'} />
                    <ButtonPagination src={'/sidebar/buttonPagination-eventos.png'} alt={'evento'} title={'Eventos'} bgColor={true} />
                    <ButtonPagination src={'/sidebar/buttonPagination-equipes.png'} alt={'equipes'} title={'Equipes'} />
                    <ButtonPagination src={'/sidebar/buttonPagination-inscricoes.png'} alt={'inscricoes'} title={'Inscrições'} />
                </div>
                <div className="userMenu">
                    <img className='linhaDivisoria' src="/sidebar/linha-sidebar.png" />
                    <div className="dataUser">
                        <img src="/sidebar/imagem-perfil.png" />
                        <div>
                            <text><strong>Kaique Steck</strong></text>
                            <br />
                            <span>Administrador</span>
                        </div>
                    </div>
                    <ButtonMenuUser src={'/sidebar/buttonMenuUser-dados.png'} alt={'Alterar Dados'} title={'Alterar Dados'} />
                    <ButtonMenuUser src={'/sidebar/buttonMenuUser-sair.png'} alt={'Sair'} title={'Sair'} />
                </div>
            </InteractionArea>
        </LeftMenu>
    )
}

export default Sidebar
