import React from "react";

const ListCharacter = ({ chars }) => {
	return (
		<div className="autoselect">
			<h3>List of characters:</h3>
			<ul>
				{chars.map((char, index) => (
					<li key={index}>
						<p>Name: {char.name}</p>
						<p>Gender: {char.gender}</p>
						<p>
							Specie: {char.species}
							{char.type != "" ? ", Type: " + char.type : ""}
						</p>
						<p>Status: {char.status}</p>
						<p>location: {char.location}</p>
						<img src={char.img} alt={char.name} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListCharacter;
