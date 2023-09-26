import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    BD: Number,
    HL: Number,
    ROP: Number,
    IMV: Number,
    DP: Number,
    DS: Number,
    GR: Number,
    RSS: Number,
    RSD: Number,
    RSM: Number,
    PG: Number,
    FL: Number,
    FLR: Number,
    FG: Number,
    PERM: Number,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// timestamp will add two types of data to the schema: createdAt and updatedAt

export default mongoose.model("job", jobSchema);
