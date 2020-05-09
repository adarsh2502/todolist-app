

//this is the datastructure needed for object passed to front end client.
const tasks = [
    {
        t_id:1,
        t_name: "cook dinner",
        t_user: "no one",
        t_priority:1,
        t_status: 1,
        statut_descriptions: "chicken curry",
        t_start_date: "25-04-2020",
        t_due_date:"25-04-2020",
        t_rec_id:"it's a int:depedning on the foreign key",
        t_group:"it's a int:depedning on the foreign key",
        t_caregory:"it's a int:depedning on the foreign key",
        t_active:"it's a int:true===1,false===0"
    },
    {
        t_id:1,
        t_name: "cook lunch",
        t_user: "some one",
        t_priority:1,
        t_status: 1,
        statut_descriptions: "salad",
        t_start_date: "26-04-2020",
        t_due_date:"26-04-2020",
        t_rec_id:"it's a int:depedning on the foreign key",
        t_group:"it's a int:depedning on the foreign key",
        t_caregory:"it's a int:depedning on the foreign key",
        t_active:"it's a int:true===1,false===0"
    }
]

// lists Node.js object array......there are two in the 
const listsCategories = [
    {
        c_id: 545,
        c_name: "some name ",
    },

    {
        c_id: 575,
        c_name: "some name ",
    }
]

const tagsGroups = [
    {
        g_id:2362784,
        g_name: "some group name"
    },
    {
        g_id:897,
        g_name: "another group name"
    }
]

const priorities = [
    {
        p_id:1,
        p_priority:"High"
    },
    {   
        p_id:2,
        p_priority:"MEDIUM",

        p_id:3,
        p_priority:"LOW"
    }
]

const statusArr = [
    {
        s_id:1,
        s_status: "To Start",
    },
    {
        s_id:2,
        s_status: "Ongoing",
    },
    {
        s_id:3,
        s_status: "Done",
    },
    {
        s_id:4,
        s_status: "Overdue",
    },
]

export default tasks;