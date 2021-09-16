import React, { useState, useEffect } from "react";
import Autoselect from "../../components/Autoselect/Autoselect";
import ListCharacter from "../../components/ListCharacter/ListCharacter";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function Characters() {
	// const getSelection = () => {};
	const [chars, setChars] = useState([]);
	const [episode, setEpisode] = useState("t");
	const [tmp, setTmp] = useState(episode);
	// const [data, setData] = useState([]);
	const [api, setApi] = useState({
		curr: "https://rickandmortyapi.com/api/episode",
		prev: null,
		next: null,
	});

	// hook when episode is selected on the list
	useEffect(() => {
		// map on autoSelect let this useEffect proc
		// while he didn't, tempo fix with the if
		if (tmp !== episode) {
			const fetchData = async () => {
				const responseJSON = await fetch(api.curr);
				const responseData = await responseJSON.json();
				console.log(episode);
				// setData(Object.values(responseData.results));
				const perso = Object.values(responseData.results).find(
					(elem) => elem.episode === episode
				);
				// reset array of chars
				setChars([]);
				console.log(perso);
				// get chars's infos on the api
				perso.characters.forEach(async (elem) => {
					const responseJSON = await fetch(elem);
					const responseData = await responseJSON.json();
					console.log(responseData);

					setChars((oldArray) => [
						...oldArray,
						{
							img: responseData.image,
							gender: responseData.gender,
							name: responseData.name,
							status: responseData.status,
							location: responseData.location.name,
							species: responseData.species,
							type: responseData.type,
						},
					]);
				});
			};

			fetchData();
		}
	}, [episode]);

	return (
		<div>
			<Container fixed>
				<Typography
					component="div"
					style={{
						backgroundColor: "#cfe8fc",
						padding: "20px",
						marginTop: "20px",
						borderRadius: "0px 40px",
						border: "solid gray 2px",
						boxShadow: "10px 5px 5px gray",
					}}
				>
					<Container fixed>
						<Typography
							component="div"
							style={{
								backgroundColor: "#bed7eb",
								borderRadius: "20px",
								border: "solid gray 2px",
							}}
						>
							<Autoselect
								api={api}
								setApi={setApi}
								setEpisode={setEpisode}
								setChars={setChars}
							/>
						</Typography>
					</Container>
					<ListCharacter chars={chars} />
				</Typography>
			</Container>
		</div>
	);
}

export default Characters;
