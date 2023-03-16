import { useMemo } from "react";
import Table, { SelectColumnFilter } from "./Table";
import "./App.css";

const getData = () => [
	{
		name: "Jane Cooper",
		email: "jane.cooper@example.com",
		title: "Regional Paradigm Technician",
		department: "Optimization",
		status: "Active",
		role: "Admin",
		age: 27,
	},
	{
		name: "Cody Fisher",
		email: "cody.fisher@example.com",
		title: "Product Directives Officer",
		department: "Intranet",
		status: "Active",
		role: "Owner",
		age: 20,
	},
	{
		name: "Esther Howard",
		email: "esther.howard@example.com",
		title: "Forward Response Developer",
		department: "Directives",
		status: "Active",
		role: "Member",
		age: 23,
	},
	{
		name: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		title: "Central Security Manager",
		department: "Program",
		status: "Active",
		role: "Member",
		age: 31,
	},
	{
		name: "Kristin Watson",
		email: "kristin.watson@example.com",
		title: "Lean Implementation Liaison",
		department: "Mobility",
		status: "Active",
		role: "Admin",
		age: 45,
	},
	{
		name: "Cameron Williamson",
		email: "cameron.williamson@example.com",
		title: "Internal Applications Engineer",
		department: "Security",
		status: "Active",
		role: "Member",
		age: 98,
	},
	{
		name: "Jane Cooper",
		email: "jane.cooper@example.com",
		title: "Regional Paradigm Technician",
		department: "Optimization",
		status: "Active",
		role: "Admin",
		age: 12,
	},
	{
		name: "Cody Fisher",
		email: "cody.fisher@example.com",
		title: "Product Directives Officer",
		department: "Intranet",
		status: "Active",
		role: "Owner",
		age: 32,
	},
	{
		name: "Esther Howard",
		email: "esther.howard@example.com",
		title: "Forward Response Developer",
		department: "Directives",
		status: "Active",
		role: "Member",
		age: 2,
	},
	{
		name: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		title: "Central Security Manager",
		department: "Program",
		status: "Active",
		role: "Member",
		age: 56,
	},
	{
		name: "Kristin Watson",
		email: "kristin.watson@example.com",
		title: "Lean Implementation Liaison",
		department: "Mobility",
		status: "Active",
		role: "Admin",
		age: 44,
	},
	{
		name: "Cameron Williamson",
		email: "cameron.williamson@example.com",
		title: "Internal Applications Engineer",
		department: "Security",
		status: "Active",
		role: "Member",
		age: 211,
	},
	{
		name: "Jane Cooper",
		email: "jane.cooper@example.com",
		title: "Regional Paradigm Technician",
		department: "Optimization",
		status: "Active",
		role: "Admin",
		age: 76,
	},
	{
		name: "Cody Fisher",
		email: "cody.fisher@example.com",
		title: "Product Directives Officer",
		department: "Intranet",
		status: "Active",
		role: "Owner",
		age: 55,
	},
	{
		name: "Esther Howard",
		email: "esther.howard@example.com",
		title: "Forward Response Developer",
		department: "Directives",
		status: "Active",
		role: "Member",
		age: 56,
	},
	{
		name: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		title: "Central Security Manager",
		department: "Program",
		status: "Active",
		role: "Member",
		age: 100,
	},
	{
		name: "Kristin Watson",
		email: "kristin.watson@example.com",
		title: "Lean Implementation Liaison",
		department: "Mobility",
		status: "Active",
		role: "Admin",
		age: 83,
	},
	{
		name: "Cameron Williamson",
		email: "cameron.williamson@example.com",
		title: "Internal Applications Engineer",
		department: "Security",
		status: "Active",
		role: "Member",
		age: 19,
	},
	{
		name: "Jane Cooper",
		email: "jane.cooper@example.com",
		title: "Regional Paradigm Technician",
		department: "Optimization",
		status: "Active",
		role: "Admin",
		age: 29,
	},
	{
		name: "Cody Fisher",
		email: "cody.fisher@example.com",
		title: "Product Directives Officer",
		department: "Intranet",
		status: "Active",
		role: "Owner",
		age: 37,
	},
	{
		name: "Esther Howard",
		email: "esther.howard@example.com",
		title: "Forward Response Developer",
		department: "Directives",
		status: "Active",
		role: "Member",
		age: 38,
	},
	{
		name: "Jenny Wilson",
		email: "jenny.wilson@example.com",
		title: "Central Security Manager",
		department: "Program",
		status: "Active",
		role: "Member",
		age: 87,
	},
	{
		name: "Kristin Watson",
		email: "kristin.watson@example.com",
		title: "Lean Implementation Liaison",
		department: "Mobility",
		status: "Active",
		role: "Admin",
		age: 26,
	},
	{
		name: "Cameron Williamson",
		email: "cameron.williamson@example.com",
		title: "Internal Applications Engineer",
		department: "Security",
		status: "Active",
		role: "Member",
		age: 26,
	},
];

export default function App() {
	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Email",
				accessor: "email",
			},
			{
				Header: "Age",
				accessor: "age",
			},
			{
				Header: "Title",
				accessor: "title",
				Filter: SelectColumnFilter,
				filter: "includes",
			},
			{
				Header: "Department",
				accessor: "department",
				Filter: SelectColumnFilter,
				filter: "includes",
			},
			{
				Header: "Status",
				accessor: "status",
				Filter: SelectColumnFilter,
				filter: "includes",
			},
			{
				Header: "Role",
				accessor: "role",
				Filter: SelectColumnFilter,
				filter: "includes",
			},
		],
		[]
	);

	const data = useMemo(() => getData(), []);

	return (
				<section>
			<Table columns={columns} data={data} />
		</section>
	);
}
