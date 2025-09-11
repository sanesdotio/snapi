import express from 'express';

const app = express();
const port = 8080;

console.log('We are testing CI pipeline');

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
