const getAllJobs = async (req, res) => {
  res.send('got all jobs');
};

const getJob = async (req, res) => {
  res.send('get job by id');
};

const createJob = async (req, res) => {
  res.send({ ...req.user, ...req.body });
};

const updateJob = async (req, res) => {
  res.send('update job');
};

const deleteJob = async (req, res) => {
  res.send('delete job');
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
