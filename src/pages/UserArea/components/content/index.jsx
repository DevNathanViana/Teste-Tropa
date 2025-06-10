import ContentPage from "./contentPage"
import HeaderPage from "./header"
import { AllContent } from "./styles/styles"

function Content() {

    return (
        <AllContent>
            <HeaderPage />
            <ContentPage />
        </AllContent>
    )
}

export default Content
