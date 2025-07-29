import Tabs from "./tabs"


function RandomComponent() {
    return <h1>Some Random content</h1>
}

export default function TabTest() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is tab 1 content</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is tab 2 content</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent/>
        },
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}