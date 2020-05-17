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
            <span className="moreinfo" >Детальніше про номер</span>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Table style={{border: 'none'}}>
            <Table.Body>
              <Table.Row>
                <Table.Cell width='one'><h5>Опис номера</h5></Table.Cell>
                <Table.Cell width="two">
                  <span className="descroom">Двомісні апартаменти з двоспальним ліжком.</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h5>Тип спальних месць</h5></Table.Cell>
                <Table.Cell>
                    <span className="descroom">Двуспальная кровать</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h5>Ванна кімната</h5></Table.Cell>
                <Table.Cell>
                  <span className="descroom">Фен, Туалет, Ванна кімната в номері, Тапочки, Умивальник, Душова кабіна</span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><h5>Удобства</h5></Table.Cell>
                <Table.Cell>
                  <span className="descroom"> Електричний чайник, Кондиціонер, Холодильник, Робочий стіл, Гостьовий куток, Мікрохвильова піч, пральна машина, Кухня в номері, сітка від Газова / Електрична плита, Кухонні приналежності, Шафа / Гардероб, Вішак для одягу, Праска, Електронні книги, окремий вхід в номер, Обідня зона.</span>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>

     
      </Accordion>
    )
  }
}