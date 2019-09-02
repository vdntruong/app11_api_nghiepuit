const initialState = [
	{
		id: 'ST-50',
		name: 'SHBDN',
		price: 500,
		status: true
	},
	{
		id: 'SM-41',
		name: 'SHBDN',
		price: 450,
		status: false
	},
	{
		id: 'XS-85',
		name: 'SHBDN',
		price: 455,
		status: true
	}
];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return [ ...state ];
	}
};