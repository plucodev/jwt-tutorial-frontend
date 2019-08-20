const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: null,

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
            logout:()=>{
                const store = getStore()
                setStore({ token: null });
            },
			login: (username, email) => {
				fetch("https://3000-aca576a9-c97a-4f5a-ad0d-7831385dac5b.ws-eu0.gitpod.io/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
                                                      // add this to any fetch in headers  authorization: "Bearer " + store.token

					},

					body: JSON.stringify({
						email: email,
						username: username
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt });
						}
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
