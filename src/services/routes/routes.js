import { Router } from "express";
import q2m from "query-to-mongo";
import Job from "./schema.js";

const examplesRouter = Router();

examplesRouter.get("/", async (req, res, next) => {
  try {
    const query = q2m(req.query);
    console.log(query);
    const total = await Job.countDocuments(query.criteria);
    const data = await Job.find(query.criteria, query.options.fields)
      .limit(query.options.limit)
      .skip(query.options.skip)
      .sort(query.options.sort);
    res.send({
      links: query.links("/jobs", total),
      total,
      data,
      pageTotal: Math.ceil(total / query.options.limit),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

examplesRouter.get("/categories", async (req, res, next) => {
  try {
    const data = await Job.distinct("category");
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default examplesRouter;
