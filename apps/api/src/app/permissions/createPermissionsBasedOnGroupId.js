/* eslint-disable no-unused-vars */
const GROUP_ID_ALL_HAMPDEN_NL_USERS = '10bd2920-761c-4eb1-ab33-daf9da3b21aa'
const GROUP_ID_RGT_POWER_APPS_RW = 'c3301f29-1fe5-48e6-adc0-30fbfb83fb94'
const GROUP_ID_RGT_POWER_APPS_SP = '6381bd75-88ca-4084-ba53-1aeadf9151ce'
const GROUP_ID_SEC_DEO = '9d6ac95a-3159-4ecd-b0db-31ad9ffc1e04'
const GROUP_ID_BGP_DEVELOPER_GUI = '94bc2067-92e7-4f22-8118-781c19502aa5'
const GROUP_ID_ALL_USERS = 'f3889a7a-cc22-4ba2-9dc5-63a66b27c8af'
const GROUP_ID_RGP_AZURE_DEVOPS_RW = 'b8ab8290-59c1-4c05-8817-b00897a4e2e3'
const GROUP_ID_RGO_POC_AZURE_DATA_PLATFORM_RW =
    'a33307a8-45ff-4b22-935b-15554e90a4e2'
const GROUP_ID_SEC_RDS_USERS = 'c4d229ac-758e-4461-b472-551d13c7bc75'
const GROUP_ID_SEC_VPN_ACCESS = 'f0fd36ce-0dad-4fdc-8d2f-591e2625a23b'
const GROUP_ID_RGP_OMNIBUS_AZURE_DEVOPS_RW =
    'cc09aefc-46b3-4882-99ca-dc6aa3e34d77'

export default function createPermissionsBasedOnGroupId(groupIds = []) {
    if (groupIds.includes(GROUP_ID_RGO_POC_AZURE_DATA_PLATFORM_RW)) {
        return {
            canViewDashboard: true,
            canViewValidations: true,
            canViewDisasters: true,
            canViewSettings: true,
            canApproveFiles: false,
        }
    }
    return {
        canViewDashboard: true,
        canViewValidations: true,
        canViewDisasters: true,
        canViewSettings: false,
        canApproveFiles: false,
    }
}
