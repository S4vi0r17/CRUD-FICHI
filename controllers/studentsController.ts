import { Request, Response } from "express";

const homePage = (req: Request, res: Response) => {
  res.render("index", { title: "Home" });
};

export {
  homePage
}