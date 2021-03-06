const ServiceRequest = require("../models/serviceRequestModel");

const Service = require("../models/serviceModel");

// Generating a request
exports.generateRequest = async (req, res) => {
  const service = await Service.findById(req.body.serviceId);
  // console.log(serviceName);

  let serviceRequest = {
    ...req.body,
    service: {
      serviceName: service.name,
      serviceId: req.body.serviceId
    }
    // ...req.body,
  };
  // serviceRequest.service.serviceName = service.name;


  try {
    // const data = {
    //   contact: req.body.contact,
    //   details: req.body.details,
    //   status: req.body.status,
    //   // service.serviceName:req.body.status,
    //   service: {
    //     serviceName: req.body.service.serviceName,
    //     serviceId: req.body.service.serviceId
    //   }
    // };

    const newRequest = await ServiceRequest.create(serviceRequest);

    // const data = [...req.body];

    // console.log(...req.body);
    // console.log(objClone);
    res.status(201).json({
      status: "success",
      data: {
        request: newRequest,
        // data
      },
    });
  } catch (err) {
    // console.log(objClone);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err,
    });
  }
};

// Getting all Order
exports.getAllRequest = async (req, res) => {
  try {
    const requests = await ServiceRequest.find();
    res.status(200).json({
      status: "success",
      results: requests.length,
      data: {
        requests,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Getting one Request
exports.getRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        request,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Updateing a request
exports.updateRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    console.log(request);
    res.status(200).json({
      status: "success",
      data: {
        request,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Deleteing a product
exports.deleteRequest = async (req, res) => {
  try {
    await ServiceRequest.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
