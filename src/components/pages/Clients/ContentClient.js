import {faCheck, faPlus, faPen, faUserFriends, faSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'


const ContentClient = () => {
	return (
		<>
			<div className='header-client'>
				<button className='btn-add-client'>
					<FontAwesomeIcon icon={faPlus} /> Nouveau Client
				</button>
				<div className='right-header-client'>
					<div className='summary-client'>
						<FontAwesomeIcon icon={faUserFriends} />
						<div className='effectifs'>
							<span className='total'>Total clients</span>
							<span className='effectif'>120 Personnes</span>
						</div>
					</div>

					<div className='actions'>
						<button>
							<FontAwesomeIcon icon={faCheck} />
							Actifs
						</button>
						<button>Modifier</button>
						<button>Supprimer</button>
					</div>
				</div>
			</div>

			<div className='table-list-client'>
				<table>
					<thead>
						<tr>
							<th><FontAwesomeIcon icon={faSquare}/></th>
							<th>Code.Cli</th>
							<th>Nom</th>
							<th>Prénom(s)</th>
							<th>E-mail</th>
							<th>Roles</th>
							<th>Téléphone</th>
							<th>Numéro de la carte</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><FontAwesomeIcon icon={faSquare}/></td>
							<td>C_095664</td>
							<td>ROBUSTE</td>
							<td>Manohisafidy Vatsisoa Mario</td>
							<td>robustemmanuel@gmail.com</td>
							<td>Admin</td>
							<td>+261 34 63 975 18</td>
							<td>4254264584784212</td>
							<td>
								<FontAwesomeIcon icon={faPen} />
								<FontAwesomeIcon icon={faTrash} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ContentClient
