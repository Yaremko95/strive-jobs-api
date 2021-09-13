import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Job = new Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  company_name: {
    type: String,
  },
  category: {
    type: String,
  },

  job_type: {
    type: String,
  },
  publication_date: {
    type: Date,
  },
  candidate_required_location: {
    type: String,
  },
  salary: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default model("Jobs", Job);
