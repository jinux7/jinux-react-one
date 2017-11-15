import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContainBox from '@/components/public_ui/elements/containBox'
import DropDownWarning from '@/components/public_ui/elements/dropDown/dropDown'
import './all.less'
import SwitchWarning from '../warning/switch/switch_warning'
import EveryMomentButton from '@/components/public_ui/elements/button/button'
import TableWarning from '../warning/table/table_warning'
import CommonInput from '@/components/public_ui/elements/search/input'

class EveryMomentStop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.select = {
            tt: '风场名称',
            arr: ['测试1', '测试2', '测试3', '测试4']
        };
    }
    receivePar = (par) => {
        console.log(par)
    }
    render() {
        return (
            <div id='wrap_stop_all'>
                <ContainBox>
                    <div id='wrap_stop_select'>
                        <div>
                            <CommonInput name={'风场名称：'}  showValue={(value)=>{ console.log(value)}}/>
                        </div>
                        <div>
                            <CommonInput name={'风场名称：'}  showValue={(value)=>{ console.log(value)}}/>
                        </div>
                        <div>
                            <CommonInput name={'风场名称：'}  showValue={(value)=>{ console.log(value)}}/>
                        </div>
                        <div>
                            <SwitchWarning/>

                        </div>
                        <div>
                            <EveryMomentButton
                                type={'search'}
                                buttonClick={(val) => {
                                console.log(val)
                            }}
                                name={'查询'}/>
                            <EveryMomentButton
                                type={'reload'}
                                buttonClick={(val) => {
                                console.log(val)
                            }}
                                name={'重置'}/>
                        </div>
                    </div>

                </ContainBox>
                <div style={{
                    marginTop: 20
                }}>
                    <ContainBox>
                        <div>
                            <TableWarning size={'middle'}/>
                        </div>
                    </ContainBox>
                </div>

            </div>
        )
    }
}
export default EveryMomentStop