import MenuList from "./menu-list";
import './styles.css'

export default function TreeView({menus = []}) {
    return (
        <div className="bg-orange-700 p-4 w-1/5 h-screen">
            <MenuList list={menus} />
        </div>
    )
}