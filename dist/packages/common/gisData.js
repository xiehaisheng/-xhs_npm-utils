// 获取撒点数据
export const setDataParameter = async (data, projectDisplayUrl, token, region) => {
  const mapDataSets = JSON.parse(data);
  let datas = [];
  mapDataSets &&
    mapDataSets.forEach((item) => {
      item.datasets.forEach((dataset) => {
        datas.push({
          datasetNames: [`${item.datasource}:${dataset}`],
          url: projectDisplayUrl,
          token,
          region,
        });
      });
    });
  const res = await promiseData(datas);
  return res;
};

const promiseData = async (data) => {
  let length = data.length;
  for (let i = 0; i < length; i++) {
    try {
      const res = await getDataPromise(data[i], i);
      return res;
    } catch (e) {
      console.error(e);
    }
  }
};

const getDataPromise = (input, index) => {
  return new Promise((resolve, reject) => {
    try {
      let obj = new window.mapboxgl.supermap.FeatureService(input.url);
      let parames = new window.SuperMap.GetFeaturesByGeometryParameters({
        attributeFilter: "",
        datasetNames: input.datasetNames,
        // fromIndex: 0,
        toIndex: -1,
        // maxFeatures: -1,
        geometry: {},
        spatialQueryMode: "INTERSECT",
      });

      if (!obj.options["headers"]) {
        obj.options["headers"] = {};
      }
      if (!obj.options.headers["Content-Type"]) {
        obj.options.headers["Content-Type"] = "application/json";
        obj.options.headers["uc_access_token"] = input.token;
        obj.options.headers["region"] = input.region;
      }
      obj.getFeaturesByGeometry(parames, (serviceResult) => {
        try {
          if (serviceResult.type === "processFailed") {
            reject("processFailed: 撒点失败，数据未找到！");
            return;
          }
          if (
            serviceResult.result.features &&
            // @ts-ignore
            !serviceResult.result.features.features.length == 0
          ) {
            const addClusterId = serviceResult.result.features.features.reduce(
              (acc, v) => {
                return [
                  ...acc,
                  {
                    ...v,
                    properties: {
                      ...v.properties,
                      cluster_id: uniqueId(),
                    },
                  },
                ];
              },
              []
            );
            resolve({
              ...serviceResult.result.features,
              features: addClusterId,
            });
            return;
          } else {
            reject("撒点失败，数据未找到！");
          }
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

// 唯一ID
const uniqueId = () => {
  var length = 10;
  var str =
    "0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z";
  var data = str.split("-");
  var nums = "";
  for (var i = 0; i < length; i++) {
    var r = parseInt(String(Math.random() * 61));
    nums += data[r];
  }
  return (
    new Date().getTime() +
    "_" +
    parseInt(String(Math.random() * 1000000)) +
    "_" +
    nums
  );
};
