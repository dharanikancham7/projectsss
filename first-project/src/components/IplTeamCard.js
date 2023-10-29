import React, { Component } from 'react'
const {teamDetails} = props
const {name, id, teamImageURL} = teamDetails

class IplTeamCard extends Component {
  render() {
    return (
        <li className="team-item">
        <Link exact path={`/team/${id}`} className="link-item">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default IplTeamCard