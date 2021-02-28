import "./styleLess.css";
import React, {Component} from "react";

 class DraggableSlider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: this.props.initialValue || 0,
            isDragging: false,
            vertical:true,
            speed: 5000,
            dragDiff: 0
        }

        this.startDrag = this.startDrag.bind(this)
        this.drag = this.drag.bind(this)
        this.stopDrag = this.stopDrag.bind(this)
    }

    drag (e) {

        const { isDragging, dragDiff } = this.state
        const { maxHeight, onSlideCallback } = this.props

        if(!isDragging) { return }


        e.persist()

        let newVal = ((maxHeight - e.clientY) / maxHeight) - dragDiff

        newVal = Math.max(newVal, 0)
        newVal = Math.min(newVal, 1)


        this.setState({
                value: newVal
            },
            () => {
                if(onSlideCallback){
                    onSlideCallback(newVal)
                }
            })
    }

    startDrag (e) {

        const { maxHeight } = this.props

        const dragPoint =  (maxHeight - e.clientY) / maxHeight

        const dragDiff = dragPoint - this.state.value

        this.setState({
            isDragging: true,
            dragDiff
        })

    }

    stopDrag (e) {

        this.setState({
            isDragging: false
        })

    }

    render () {

        const { maxHeight=300, handleHeight=50, baseHeight=50, reportTextFunction } = this.props

        const sliderHeight = maxHeight * this.state.value
        const containerHeight = maxHeight + handleHeight + baseHeight
        const handleBottom = baseHeight + sliderHeight


        const reportText = reportTextFunction ? reportTextFunction(this.state.value) : ''

        const styles = {

            container: {
                height: containerHeight
            },
            slider: {
                height: sliderHeight,
                bottom: baseHeight
            },
            handle: {
                bottom: handleBottom,
                height: handleHeight
            },
            base: {
                height: baseHeight
            },
            textReport: {
                marginTop: handleHeight * 0.3,
                userSelect: 'none'
            }
        }
        return (
            <div className="draggable-slider-container" style={styles.container}>
                <div className="handle"
                     style={styles.handle}
                     onMouseDown={this.startDrag}
                     onMouseMove={this.drag}
                     onMouseUp= {this.stopDrag}
                     onMouseOut={this.stopDrag}
                >
                    <div style={styles.textReport}>
                        {reportText}
                    </div>
                </div>
                <div className="draggable-slider" style={styles.slider}/>
            </div>
        )
    }
}

export default class AppDraggble extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
            <div className="container-1">
                <h5 className="draggableStyle">Вкажіть, будь ласка,наскільки вам сподобався сайт?</h5>
                <h6 className="draggableStyle_h6">Нам важлива ваша думка!</h6>
                <DraggableSlider
                    maxHeight={300}
                    initialValue={0.6}
                    handleHeight={50}
                    baseHeight={0}
                    reportTextFunction={val => parseInt(val * 100) + '%' }
                    onSlideCallback={(val) => console.log(val)}
                >
                </DraggableSlider>
            </div>

            </div>
    )
    }
}

