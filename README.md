# continuous_dynamic_sim_testing

Simple MVP for demonstration of an automated creation of a testing pipeline, based on the [SSP Traceability Specification](https://modelica.github.io/ssp-ls-traceability/master/),  aka. *Simulation Task Metadata (STMD)*.

Within the Simulation Model's STMD, quality metrics that need to be executed are defined, using quality metrics and utilities, defined in the [Credibility Development Kit (CDK)](https://github.com/virtual-vehicle/Credibility-Assessment-Framework/tree/dev/Credibility-Development-Kit) that has been initiated in the [UPSIM project](https://upsim-project.eu/). All necessary steps to execute a quality metrics are defined according to the [CDK specification](./CDK.xsd).

The workflow, triggered upon a push is as follows:
1. The [create testing pipeline](.github/workflows/create_testing_pipeline.yml) is triggered
2. Within this pipeline, the [STMD file](SimulationTaskMetaData.stmd) is read, using the [STMD-CRUD](https://github.com/virtual-vehicle/Credibility-Assessment-Framework/tree/5efaea626e2305ecefd5dc03b10d8e83bd99c81a/Credibility-Development-Kit/util/stmd-crud) and all quality metrics that must be executed are extracted.
3. The actual [continuous testing pipeline](.github/workflows/continuous_test.yml) is generated, automatically implementing execution routines for the quality metrics (next to possible pre-processing steps like generating data in a simulation run).
4. The [continuous testing pipeline](.github/workflows/continuous_test.yml) is triggered and executes all necessary steps to get results for the defined quality metrics.
5. All results are summarized in a single statement.