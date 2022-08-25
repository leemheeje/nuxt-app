import {
	SET_MOZIPBUNYA_TITLE,
	SET_MOZIPBUNYA_LENGTH,
	SET_MOZIPBUNYA_NEWCOMER,
	SET_MOZIPBUNYA_CAREER,
	SET_MOZIPBUNYA_CAREER_RANGE,
	SET_MOZIPBUNYA_CAREER_ABSOLUTE,
	SET_MOZIPBUNYA_RESPONS,
	SET_MOZIPBUNYA_PARTNAME,
	SET_JOBPOST_OBJECT_MERGE,
} from "~/store/mutations-type";
export default ({ store, $cookies }) => {
	const jobpost = 'jobpost'
	const pages = ['recruitment', 'eligibility']
	console.log(`middleware/jobpost/recruitment.js-0-------------------------${``}--`)
	pages.forEach((item) => {
		let state = $cookies.get(item) || store.state[jobpost]
		if (state) {
			store.commit(`jobpost/${SET_JOBPOST_OBJECT_MERGE}`, (typeof state === 'object' && !Array.isArray(state)) ? state : {})
		}
	})
}