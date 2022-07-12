import { render } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { Card, Image, Subtitle, Title } from "../bulma";
import { FormatListItem } from "./List";

interface ItemProps {
  data: any,
  format: FormatListItem,
}

export const Item = ({ data, format } : ItemProps) => {
  const history = useHistory();
  console.log(format);
  return (
    <div className={`column${format.span ? ` is-${format.span}` : ''}`}>
      <Card>
        <Card.Image>
          {format.image?.render ? format.image?.render(data) : <></>}
        </Card.Image>
        <Card.Content>
          <div className="media">
            <div className="media-content">
              <Title size={4}>{data?.[format.title.dataIndex]}</Title> 
              {format.subtitle?.render && format.subtitle?.render(data)}
              {!format.subtitle?.render && format.subtitle && <Subtitle>{data?.[format?.subtitle?.dataIndex]}</Subtitle>}
            </div>
          </div>
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