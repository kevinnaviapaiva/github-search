import { Row } from "../bulma"
import { Item } from "./Item"

interface ListItemPart {
  dataIndex: string,
  render?: Function,
}
export interface FormatListItem {
  title: ListItemPart,
  subtitle?: ListItemPart,
  image?: ListItemPart,
  body: ListItemPart[],
  footer: ListItemPart[],
  span?: number,
}

interface ListProps {
  data: any[],
  format: FormatListItem,
}

export const List = ({ data, format } : ListProps) => {
  return (
      <div className="hero">
        <Row multiLine>
          {data.map(item => (
            <Item data={item} format={format} />
          ))}
        </Row>
      </div>
  )
}