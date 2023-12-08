// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ByAge from '../VaccinationByAge'

import CoverageBy from '../VaccinationCoverage'

import GenderBy from '../VaccinationByGender'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {stateCondition: apiStatus.initial, data: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({stateCondition: apiStatus.progress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok === true) {
      const fetching = await response.json()
      console.log(fetching)

      const dataAll = {
        sevenDays: fetching.last_7_days_vaccination.map(days => ({
          name: days.vaccine_date,
          doseOne: days.dose_1,
          doseTwo: days.dose_2,
        })),
        ByAge: fetching.vaccination_by_age.map(each => ({
          age: each.age,
          count: each.count,
        })),
        byGender: fetching.vaccination_by_gender.map(gender => ({
          count: gender.count,
          gender: gender.gender,
        })),
      }

      this.setState({data: dataAll, stateCondition: apiStatus.success})
    } else {
      this.setState({stateCondition: apiStatus.failure})
    }
  }

  success = () => {
    const {data} = this.state
    console.log(data.sevenDays)
    console.log(data.ByAge)
    console.log(data.byGender)

    return (
      <div className="BgCenter">
        <CoverageBy CoverSending={data.sevenDays} />

        <GenderBy GenderData={data.byGender} />
        <ByAge ElementSending={data.ByAge} />
      </div>
    )
  }

  progress = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  failure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderStatus = () => {
    const {stateCondition} = this.state

    switch (stateCondition) {
      case 'SUCCESS':
        return this.success()
      case 'FAILURE':
        return this.failure()
      case 'PROGRESS':
        return this.progress()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="bgColor">
        <div className="flexingIcon">
          <div>
            <img
              className="WebSiteLogo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
          </div>
          <h1>Co-WIN</h1>
        </div>
        <h1 className="headingCowIn">CoWIN Vaccination in India</h1>
        <div>{this.renderStatus()}</div>
      </div>
    )
  }
}

export default CowinDashboard
