"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2418],{22300:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=r(17624),i=r(4552);const o={sidebar_position:1},l="CI/CD with AskUI",t={id:"general/Integrations/continuous-integration",title:"CI/CD with AskUI",description:"You have two options to implement your pipeline. With our AskUI Runner Docker container or without it.",source:"@site/versioned_docs/version-0.13.1/general/05-Integrations/continuous-integration.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/continuous-integration",permalink:"/docs/general/Integrations/continuous-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/05-Integrations/continuous-integration.md",tags:[],version:"0.13.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Visual Regression with AskUI",permalink:"/docs/general/Integrations/visual-regression"},next:{title:"Using AskUI in Docker",permalink:"/docs/general/Integrations/containers"}},a={},c=[{value:"Github Actions",id:"github-actions",level:2},{value:"AskUI Runner Container: Get Workflows from AskUI Studio",id:"askui-runner-container-get-workflows-from-askui-studio",level:3},{value:"Without AskUI Runner Container",id:"without-askui-runner-container",level:3},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"AskUI Runner Container: Get Workflows from AskUI Studio",id:"askui-runner-container-get-workflows-from-askui-studio-1",level:3},{value:"Without AskUI Runner Container",id:"without-askui-runner-container-1",level:3},{value:"Azure DevOps",id:"azure-devops",level:2},{value:"AskUI Runner Container: Get Workflows from AskUI Studio",id:"askui-runner-container-get-workflows-from-askui-studio-2",level:3},{value:"Without AskUI Runner Container",id:"without-askui-runner-container-2",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cicd-with-askui",children:"CI/CD with AskUI"}),"\n",(0,s.jsx)(n.p,{children:"You have two options to implement your pipeline. With our AskUI Runner Docker container or without it."}),"\n",(0,s.jsx)(n.p,{children:"The main difference without the AskUI Runner container is, that you can not download the latest version of your workflows from AskUI Studio inside your pipeline but have to provide them to your build."}),"\n",(0,s.jsx)(n.h2,{id:"github-actions",children:"Github Actions"}),"\n",(0,s.jsx)(n.h3,{id:"askui-runner-container-get-workflows-from-askui-studio",children:"AskUI Runner Container: Get Workflows from AskUI Studio"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner container needs a configuration file ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.yaml"})})," to know where to pull them from."]}),"\n",(0,s.jsx)(n.p,{children:"The AskUI Runner container downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side \ud83e\udd73."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set these environment variables for your pipeline:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>\nASKUI_TOKEN=<An access token from your AskUI Studio workspace>\nASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>\nASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1\n\nDOCKER_USERNAME=<Your Docker Hub username>\nDOCKER_PASSWORD=<Your Docker Hub password>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"config.yaml"})," inside your pipeline like this:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF > config.yaml\n    access_token: ${{ secrets.ASKUI_TOKEN }}\n    inference_server_url: ${{ secrets.ASKUI_INFERENCE_SERVER_URL }}\n    workspace_id: ${{ secrets.ASKUI_WORKSPACE_ID }}\n    workflow_endpoint:\n        prefixes:\n            - workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/test-cases\n        url: ${{ secrets.ASKUI_WORKFLOW_ENDPOINT_URL }}/workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/objects            \nEOF\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Execute your workflows with our AskUI Runner container. Do not forget to login into Docker Hub \ud83d\ude09."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run --shm-size="2g" --rm -v ${{ github.workspace }}/config.yaml:/home/askui/config.yaml -v ${{ github.workspace }}/allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Generate Allure report: The run results are placed in ",(0,s.jsx)(n.code,{children:"allure-results"})," where you can render your report from. Check the detailed examples for your pipeline technology."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-with-studio.yml",children:"Please check the full example file on GitHub."})}),"\n",(0,s.jsx)(n.h3,{id:"without-askui-runner-container",children:"Without AskUI Runner Container"}),"\n",(0,s.jsxs)(n.p,{children:["Download the workflows from AskUI Studio and place the folder ",(0,s.jsx)(n.code,{children:"test"})," in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"root"})})," of your repository."]}),"\n",(0,s.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Optional:"})})," Set up AskUI Controller as service"]}),"\n",(0,s.jsxs)(n.li,{children:["Setup ",(0,s.jsx)(n.code,{children:"node"})," in version ",(0,s.jsx)(n.code,{children:"16.x"})]}),"\n",(0,s.jsxs)(n.li,{children:["Install all dependencies: ",(0,s.jsx)(n.code,{children:"npm install"})]}),"\n",(0,s.jsxs)(n.li,{children:["Run tests with ",(0,s.jsx)(n.code,{children:"npm run test"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the environment variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," ",(0,s.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UiController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["For reports:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate reports"}),"\n",(0,s.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-without-studio.yml",children:"Please check the full example file on GitHub."})}),"\n",(0,s.jsx)(n.h2,{id:"gitlab-ci",children:"Gitlab CI"}),"\n",(0,s.jsx)(n.h3,{id:"askui-runner-container-get-workflows-from-askui-studio-1",children:"AskUI Runner Container: Get Workflows from AskUI Studio"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner container needs a configuration file ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.yaml"})})," to know where to pull them from."]}),"\n",(0,s.jsx)(n.p,{children:"The AskUI Runner container downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side \ud83e\udd73."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set these Gitlab variables for your pipeline:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>\nASKUI_TOKEN=<An access token from your AskUI Studio workspace>\nASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>\nASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1\n\nDOCKER_USERNAME=<Your Docker Hub username>\nDOCKER_PASSWORD=<Your Docker Hub password>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"config.yaml"})," inside your pipeline like this:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF > config.yaml\n    access_token: $ASKUI_TOKEN\n    inference_server_url: $ASKUI_INFERENCE_SERVER_URL\n    workspace_id: $ASKUI_WORKSPACE_ID\n    workflow_endpoint:\n        prefixes:\n            - workspaces/${ASKUI_WORKSPACE_ID}/test-cases\n        url: ${ASKUI_WORKFLOW_ENDPOINT_URL}/workspaces/${ASKUI_WORKSPACE_ID}/objects            \nEOF\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Do not forget to login into Docker Hub\xa0and enable Docker-In-Docker like this \ud83d\ude09:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'services:\n  - docker:dind\nbefore_script:\n  - docker info\n  - echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Execute your workflows with our AskUI Runner container."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run --shm-size="2g" --rm -v ./config.yaml:/home/askui/config.yaml -v ./allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Generate Allure report: The run results are placed in ",(0,s.jsx)(n.code,{children:"allure-results"})," where you can render your report from."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Check the detailed examples for your pipeline technology."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gitlab.com/askui/gitlab-ci-integration-askui-studio/-/blob/main/.gitlab-ci.yml",children:"Please check the full example file on Gitlab.com."})}),"\n",(0,s.jsx)(n.h3,{id:"without-askui-runner-container-1",children:"Without AskUI Runner Container"}),"\n",(0,s.jsxs)(n.p,{children:["Download the workflows from AskUI Studio and place the folder ",(0,s.jsx)(n.code,{children:"test"})," in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"root"})})," of your repository."]}),"\n",(0,s.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Optional:"})})," Set up AskUI Controller as service"]}),"\n",(0,s.jsxs)(n.li,{children:["Setup ",(0,s.jsx)(n.code,{children:"node"})," in version ",(0,s.jsx)(n.code,{children:"16.x"})]}),"\n",(0,s.jsxs)(n.li,{children:["Install all dependencies: ",(0,s.jsx)(n.code,{children:"npm install"})]}),"\n",(0,s.jsxs)(n.li,{children:["Run tests with ",(0,s.jsx)(n.code,{children:"npm run test"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the environment variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," ",(0,s.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UiController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["For reports:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate reports"}),"\n",(0,s.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gitlab.com/askui/gitlab-ci-integration/-/blob/main/.gitlab-ci.yml",children:"Please check the full example file on Gitlab.com."})}),"\n",(0,s.jsx)(n.h2,{id:"azure-devops",children:"Azure DevOps"}),"\n",(0,s.jsx)(n.h3,{id:"askui-runner-container-get-workflows-from-askui-studio-2",children:"AskUI Runner Container: Get Workflows from AskUI Studio"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner container needs a configuration file ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"config.yaml"})})," to know where to pull them from."]}),"\n",(0,s.jsx)(n.p,{children:"The AskUI Runner downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side \ud83e\udd73."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set these variables for your pipeline:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>\nASKUI_TOKEN=<An access token from your AskUI Studio workspace>\nASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>\nASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1\n\nDOCKER_USERNAME=<Your Docker Hub username>\nDOCKER_PASSWORD=<Your Docker Hub password>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"config.yaml"})," inside your pipeline like this:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF > config.yaml\n    access_token: $(ASKUI_TOKEN)\n    inference_server_url: $(ASKUI_INFERENCE_SERVER_URL)\n    workspace_id: $(ASKUI_WORKSPACE_ID)\n    workflow_endpoint:\n        prefixes:\n            - workspaces/$(ASKUI_WORKSPACE_ID)/test-cases\n        url: $(ASKUI_WORKFLOW_ENDPOINT_URL)/workspaces/$(ASKUI_WORKSPACE_ID)/objects\nEOF\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Execute your workflows with our AskUI Runner container. Do not forget to login into Docker Hub \ud83d\ude09."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "$(DOCKER_PASSWORD)" | docker login --username $(DOCKER_USERNAME) --password-stdin\ndocker run --shm-size="2g" --rm -v "/$(pwd)/config.yaml:/home/askui/config.yaml" -v "/$(pwd)/allure-results:/home/askui/test_project/allure-results" askuigmbh/askui-runner:v0.13.1-github\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Generate Allure report: The run results are placed in ",(0,s.jsx)(n.code,{children:"allure-results"})," where you can render your report from. Check the detailed examples for your pipeline technology."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- bash: |\n    curl -o allure-commandline-2.10.0.tgz -OLs https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.10.0/allure-commandline-2.10.0.tgz\n    sudo tar -zxf allure-commandline-2.10.0.tgz -C .\n    echo \"Creating allure-report\"\n    ./allure-2.10.0/bin/allure generate allure-results -o allure-report\n    echo \"allure-report created\"\n# Install https://github.com/mclay/azure-pipeline-allure-report first\n- task: PublishAllureReport@1\n  displayName: 'Publish Allure Report'\n  inputs:\n    reportDir: 'allure-report'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-with-askui-studio.yml",children:"Please check the full example file on GitHub."})}),"\n",(0,s.jsx)(n.h3,{id:"without-askui-runner-container-2",children:"Without AskUI Runner Container"}),"\n",(0,s.jsxs)(n.p,{children:["Download the workflows from AskUI Studio and place the folder ",(0,s.jsx)(n.code,{children:"test"})," in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"root"})})," of your repository."]}),"\n",(0,s.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the pipeline variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional"}),": ",(0,s.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UiController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Setup docker and ",(0,s.jsx)(n.code,{children:"node"})," in version ",(0,s.jsx)(n.code,{children:"16.x"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- task: DockerInstaller@0\n  inputs:\n    dockerVersion: '17.09.0-ce'\n- task: NodeTool@0\n  inputs:\n    versionSpec: '16.x'\n  displayName: 'Install Node.js'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the AskUI Controller from our Docker image"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- bash: |\n\tsudo ufw disable\n\techo 'Start UIController'\n\tdocker run -d -p 6769:6769 --cidfile container.cid askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install all dependencies and run the workflow:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'Run npm install'\nnpm install\necho 'Run AskUI'\nexport ASKUI_TOKEN=$(ASKUI_TOKEN)\nexport ASKUI_WORKSPACE_ID=$(ASKUI_WORKSPACE_ID)\nnpm run test\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For reports:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate reports"}),"\n",(0,s.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- bash: |\n    curl -o allure-commandline-2.10.0.tgz -OLs https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.10.0/allure-commandline-2.10.0.tgz\n    sudo tar -zxf allure-commandline-2.10.0.tgz -C .\n    echo \"Creating allure-report\"\n    ./allure-2.10.0/bin/allure generate allure-results -o allure-report\n    echo \"allure-report created\"\n# Install https://github.com/mclay/azure-pipeline-allure-report first\n- task: PublishAllureReport@1\n  displayName: 'Publish Allure Report'\n  inputs:\n    reportDir: 'allure-report'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-without-askui-studio.yml",children:"Please check the full example file on GitHub."})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>t,M:()=>l});var s=r(11504);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);