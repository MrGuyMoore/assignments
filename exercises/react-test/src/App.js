import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Section from './Section'

const data = {
    header: {
        title: 'My Cool Props Website'
    },
    sections: {
        sidebar: {
            leftBar: [
                'Start Bootstrap'
            ],
            menuItems: [
                'Home',
                'About',
                'Contact',
            ]
        },
        main: {
            title: 'Props Blog Page',
            blogPosts: [
                {title: 'What is props', body: 'Props is an objects passed between components as an argument'},
                {title: 'Why props?', body: 'Props lets you easily transfer information across the virtual dom tree'},
                {title: 'Where the props at?', body: 'Every components can use props'}
            ]
        }
    },
    footer: {
        copyright:'©2018'
    }
};

function App() {
    return(
        <div>
            <Header title={data.header.title}/>
            <Section sidebar={data.sections.sidebar} main={data.sections.main}/>
            <Footer copyright={data.footer.copyright} />
        </div>
    )

}

export default App;