import Content from "./components/content"
import Sidebar from "./components/sidebar"
import { BaseBackground } from "./styles"

function UserArea() {

  return (
    <BaseBackground>
      <Sidebar />
      <Content />
    </BaseBackground>
  )
}

export default UserArea
