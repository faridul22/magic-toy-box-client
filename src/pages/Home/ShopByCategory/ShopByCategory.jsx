import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div>
            <div className='mt-14 mb-10'>
                <div className="divider text-3xl font-semibold">Shop By Category</div>
            </div>
            <div className='text-center'>


                {/* <div className="tabs tabs-boxed">
                    <a className="tab">Tab 1</a>
                    <a className="tab tab-active">Tab 2</a>
                    <a className="tab">Tab 3</a>
                </div> */}


                <Tabs>
                    <TabList>
                        <Tab>Micro Bus</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;