import React, {Component} from 'react'
import Card from './Card'

export default class Main extends Component{
    render(){
        return (
            <Card title='Main'>
                A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.
            </Card>
        )
    }
}