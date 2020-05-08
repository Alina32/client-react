import React, { Component } from 'react'
import { Accordion, Icon, Header, Table} from 'semantic-ui-react'

export default class Moreinfo extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
            <span className="moreinfo" >Подробнее о номере</span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Table style={{border: 'none'}}>
            <Table.Body>
              <Table.Row>
                <Table.Cell width='one'><h4>Описание номера</h4></Table.Cell>
                <Table.Cell width="two">
                  <span className="descroom">Двухместные апартаменты с двуспальной кроватью.</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h4>Тип спальных мест</h4></Table.Cell>
                <Table.Cell>
                    <span className="descroom">Двуспальная кровать</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h4>Ванная комната</h4></Table.Cell>
                <Table.Cell>
                  <span className="descroom">Фен, Туалетные принадлежности, Туалет, Ванная комната в номере, Тапочки, Умывальник, Душевая кабина</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h4>Удобства</h4></Table.Cell>
                <Table.Cell>
                  <span className="descroom"> Электрический чайник, Кондиционер, Холодильник, Рабочий стол, Гостиный уголок, Микроволновая печь, Стиральная машина, Кухня в номере, Москитная сетка, Газовая / Электрическая плита, Кухонные принадлежности, Шкаф / Гардероб, Вешалка для одежды, Утюг, Гладильная доска, Отдельный вход в номер, Обеденная зона.</span>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>

     
      </Accordion>
    )
  }
}