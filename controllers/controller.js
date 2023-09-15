import Questions from "../models/questionschema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

// .........................read all questions..........
export async function getQuestion( req,res){
    try {
       const q =await  Questions.find();
       res.json(q);
        // res.json("questions api get request...")
    } catch (error) {
        
        console.log({error})
    };

}

// .........................add all questions..........
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({questions,answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// .........................delete all questions..........
export async function dropQuestions(req,res)
{
    try {
     await Questions.deleteMany();
     res.json({ msg: "questions deleted sucesfylly"})
        
    } catch (error) {
        res.json({error})
    }
    res.json("question api delete questions")
}

// .........................read all results..........
export async function getResult(req,res)
{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
        
    }
}

// .........................add all questions..........
export async function storeResult(req,res)
{
    try {
        const {username, result, attempts, points, achieved} = req.body;
        if (!username && !result)
        {
            throw Error("Data not provided...!")
        }
        Results.create({username, result, attempts, points, achieved})
        res.json({msg : "Results saved successfully...!"})
    } catch (error) {
        res.json({error})
    }
    // await Results.insertMany({ques})
    // res.json("result api post result.")
}

// .........................delete all questions..........
export async function dropResult(req,res)
{
    try {
        await Results.deleteMany();
        res.json({msg : " Result deleted succesfully"})

    } catch (error) {
        res.json({error})
    }
}

