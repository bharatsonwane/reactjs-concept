import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllData } from "../../Redux-action/index"

export class UserContainerComponentMountingClass extends Component {
    // // ----------constructor------------------------------
    constructor(props) {
        super(props)
        // // ----------Props & context & ref ------------------------------

        

        // // ----------Object Property------------------------------


        // // ----------state------------------------------
        this.state = {
            userList: null,
            error: null,
        }
    }


    // // ----------Lifecycle Method------------------------------
    componentDidMount() {
        console.log(this.props)
        this.props.actions.getUserData()
    }

    // shouldComponentUpdate() {

    //     return true
    // }

    componentDidUpdate(prevProps, prevState) {
        const { isLoading, dataListResponse, dataListError } = this.props
        console.log(dataListError)
        if (prevProps.dataListResponse !== dataListResponse && dataListResponse) {
            this.setState({
                userList: dataListResponse,
                error: null,
            })
        }
        else if (prevProps.dataListError !== dataListError && dataListError) {
            this.setState({
                error: "Something wrong happned."
            })
        }
    }

    // // ----------handler functions--------------------------------------------------



    // // ----------Render------------------------------
    render() {
        return (
            <div>
                {console.log(this.state.userList)}
                <h1>User List</h1>
                {this.props.isLoading ? <h3 style={{ color: "blue" }} >Loading...</h3> : null}
                {this.state.error ? <p style={{ color: "red" }}>{this.state.error}</p> : null}
                <div>{this.state.userList && this.state.userList.map((user, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </div>
            </div>
        )
    }
}



// // ----------redux store mapStateToProps & mapDispatchToProps --------------------
const mapStateToProps = state => {
    return {
        isLoading: state.UserReducer.isLoading,
        dataListResponse: state.UserReducer.dataListResponse,
        dataListError: state.UserReducer.dataListError,
    }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        getUserData: bindActionCreators(getAllData, dispatch),  // bindActionCreators(actionFunction, dispatch)
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(UserContainerComponentMountingClass)
