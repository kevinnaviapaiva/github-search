import { Card, Media, Subtitle, Title } from "../bulma";
import { FormatListItem } from "./List";

interface ItemProps {
  data: any,
  format: FormatListItem,
}

export const Item = ({ data, format } : ItemProps) => {
  return (
    <div className={`column${format.span ? ` is-${format.span}` : ''}`}>
      <Card>
        <Card.Image>
          {format.image?.render ? format.image?.render(data) : <></>}
        </Card.Image>
        <Card.Content>
          <Media>
            <Media.Content>
              <Title size={4}>{data?.[format.title.dataIndex]}</Title> 
              {format.subtitle?.render && format.subtitle?.render(data)}
              {!format.subtitle?.render && format.subtitle && <Subtitle>{data?.[format?.subtitle?.dataIndex]}</Subtitle>}
            </Media.Content>
          </Media>
        </Card.Content>
        <Card.Footer>
          {format.footer.map(item => (
            <Card.FooterItem>
              {item.render && item.render(data)}
              {!item.render && item.dataIndex && <div>{data?.[item.dataIndex]}</div>}
            </Card.FooterItem>
          ))}
        </Card.Footer>
      </Card>
    </div>
  )
}