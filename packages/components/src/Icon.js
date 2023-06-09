import React from 'react'
import { cva } from 'cva'

function Spinner() {
    return (
        <path d="M12 6V3M16.5 4.206l-1.502 2.602M17.192 9.002L19.794 7.5M21 12h-3M6 12H3M4.206 7.5l2.602 1.502M7.5 4.206l1.502 2.602M12 21v-3M9.002 17.192L7.5 19.794M6.808 14.998L4.206 16.5M17.192 14.998l2.602 1.502M14.998 17.192l1.502 2.602" />
    )
}

function ArrowLeft() {
    return <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
}

function ArrowRight() {
    return <path d="M5 12h14m0 0-7-7m7 7-7 7" />
}

function BarChart() {
    return <path d="M18 20V10m-6 10V4M6 20v-6" />
}

function Building1() {
    return (
        <path d="M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M19 21V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.07989 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V21M21 21H3M9.5 8H9.51M14.5 8H14.51M10 8C10 8.27614 9.77614 8.5 9.5 8.5C9.22386 8.5 9 8.27614 9 8C9 7.72386 9.22386 7.5 9.5 7.5C9.77614 7.5 10 7.72386 10 8ZM15 8C15 8.27614 14.7761 8.5 14.5 8.5C14.2239 8.5 14 8.27614 14 8C14 7.72386 14.2239 7.5 14.5 7.5C14.7761 7.5 15 7.72386 15 8Z" />
    )
}

function Building5() {
    return (
        <path d="M11.5 11H6.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3.5 12.52 3.5 13.08 3.5 14.2V21m18 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.98 3 19.42 3 18.3 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C11.5 4.52 11.5 5.08 11.5 6.2V21m11 0h-20M15 7h3m-3 4h3m-3 4h3" />
    )
}

function CheckCircle() {
    return (
        <path d="m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    )
}

function CheckCircle1() {
    return (
        <path
            fill="currentColor"
            d="m17.096 7.39-7.16 6.91-1.9-2.03c-.35-.33-.9-.35-1.3-.07-.39.29-.5.8-.26 1.21l2.25 3.66c.22.34.6.55 1.03.55.41 0 .8-.21 1.02-.55.36-.47 7.23-8.66 7.23-8.66.9-.92-.19-1.73-.91-1.03v.01Z"
        />
    )
}

function CheckDone() {
    return (
        <path d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" />
    )
}

function ChevronLeft() {
    return <path d="m15 18-6-6 6-6" />
}

function ChevronRight() {
    return <path d="m9 18 6-6-6-6" />
}

function ChevronDown() {
    return <path d="M6 9L12 15L18 9" />
}

function ChevronUp() {
    return <path d="M18 15L12 9L6 15" />
}

function ChevronUpDown() {
    return (
        <>
            <path d="M16 9L12 5L8 9" />
            <path d="M8 15L12 19L16 15" />
        </>
    )
}

function Close() {
    return <path d="M18 6 6 18M6 6l12 12" />
}

function Settings() {
    return (
        <>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
            <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" />
        </>
    )
}

function InfoCircle() {
    return (
        <path d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    )
}

function UserSquare() {
    return (
        <path d="M3.833 19.056c.502.152 1.18.152 2.334.152h8.666c1.153 0 1.832 0 2.334-.152m-13.334 0a1.833 1.833 0 0 1-.301-.12 2.5 2.5 0 0 1-1.093-1.093c-.272-.535-.272-1.235-.272-2.635V6.542c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093c.534-.272 1.234-.272 2.635-.272h8.666c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093c.272.534.272 1.234.272 2.635v8.666c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093 1.836 1.836 0 0 1-.301.12m-13.334 0c0-.674.005-1.031.064-1.331a3.333 3.333 0 0 1 2.62-2.62c.321-.063.709-.063 1.483-.063h5c.774 0 1.162 0 1.484.064a3.333 3.333 0 0 1 2.619 2.619c.06.3.063.657.064 1.331M13.833 8.792a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z" />
    )
}

function Layers() {
    return (
        <path d="M2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" />
    )
}

function Users() {
    return (
        <path d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" />
    )
}

function User() {
    return (
        <path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" />
    )
}

function UserPlus1() {
    return (
        <path d="M12 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21m17 0v-6m-3 3h6M14.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    )
}

function Plus() {
    return <path d="M12 5V19M5 12H19" />
}

function Upload() {
    return (
        <path d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21" />
    )
}

function Exclamation() {
    return (
        <path
            stroke="none"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4 3.7c1-1.6 3.3-1.6 4.2 0l6.7 12c.9 1.5-.3 3.5-2.1 3.5H5.8c-1.8 0-3-2-2-3.6l6.6-11.9Zm3.3 11.9a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12.5 6c-.7 0-1.2.5-1.2 1.2v3.6a1.2 1.2 0 1 0 2.4 0V7.2c0-.7-.5-1.2-1.2-1.2Z"
            fill="currentColor"
        />
    )
}

function ExclamationCircle() {
    return (
        <path
            stroke="none"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM13.5 18C13.5 18.8284 12.8284 19.5 12 19.5C11.1716 19.5 10.5 18.8284 10.5 18C10.5 17.1716 11.1716 16.5 12 16.5C12.8284 16.5 13.5 17.1716 13.5 18ZM12 4.5C11.1716 4.5 10.5 5.17157 10.5 6V12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12V6C13.5 5.17157 12.8284 4.5 12 4.5Z"
            fill="currentColor"
        />
    )
}

function File() {
    return (
        <path d="M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" />
    )
}

function Logout() {
    return (
        <>
            <path d="M3 12h11" />
            <path d="M11 9l3 3-3 3" />
            <path d="M6 9.137V7.4a2 2 0 0 1 1.608-1.96l11-2.406A2.146 2.146 0 0 1 21 5.2V19a2 2 0 0 1-2.339 1.972l-11-1.892A2 2 0 0 1 6 17.108v-2.137" />
        </>
    )
}

function Logout1() {
    return (
        <path d="m16 17 5-5m0 0-5-5m5 5H9m0-9H7.8c-1.7 0-2.5 0-3.2.3a3 3 0 0 0-1.3 1.3C3 5.3 3 6.1 3 7.8v8.4c0 1.7 0 2.5.3 3.2.3.5.8 1 1.3 1.3.7.3 1.5.3 3.2.3H9" />
    )
}

function Send() {
    return (
        <path d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z" />
    )
}

function Send1() {
    return (
        <path d="M10.5 13.5 21 3M10.627 13.828l2.628 6.758c.232.596.347.893.514.98a.5.5 0 0 0 .462 0c.167-.086.283-.384.515-.979L21.336 3.7c.21-.537.315-.805.258-.977a.5.5 0 0 0-.316-.316c-.172-.057-.44.048-.978.257L3.413 9.253c-.595.233-.893.349-.98.516a.5.5 0 0 0 0 .461c.087.167.385.283.98.514l6.758 2.629c.121.047.182.07.233.106a.5.5 0 0 1 .116.117c.037.051.06.111.107.232Z" />
    )
}

function Check() {
    return <path d="M20 6 9 17l-5-5" />
}

function DotsVertical() {
    return (
        <>
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" />
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" />
        </>
    )
}

function Pencil2() {
    return (
        <path d="m17 1 4 4M1 21l1.276-4.68c.084-.305.125-.458.19-.6.056-.127.126-.247.207-.36.092-.125.204-.237.428-.46L13.434 4.565c.198-.198.297-.297.412-.334a.5.5 0 0 1 .309 0c.114.037.213.136.41.334l2.87 2.868c.197.198.296.297.333.411.033.1.033.21 0 .31-.037.114-.136.213-.334.41L7.101 18.9c-.224.224-.336.336-.462.428a2.003 2.003 0 0 1-.358.208c-.143.064-.296.105-.6.189L1 21Z" />
    )
}

function Trash1() {
    return (
        <path d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6" />
    )
}

function Mail1() {
    return (
        <path d="m2 7 8.165 5.715c.661.463.992.695 1.351.784a2 2 0 0 0 .968 0c.36-.09.69-.32 1.351-.784L22 7M6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20Z" />
    )
}

function AlarmCheck() {
    return (
        <g>
            <path d="M19.999 20.828l-2.26-2.26" />
            <path d="M6.26 18.568l-2.259 2.26" />
            <path d="M8.939 5.611a7.998 7.998 0 1 1-4.328 10.45A7.998 7.998 0 0 1 8.94 5.61" />
            <path d="M7.5 3.138A3.512 3.512 0 0 0 3.033 7" />
            <path d="M16.499 3.138A3.513 3.513 0 0 1 20.968 7" />
            <path d="M13.68 12.01l-2.1 2.098-1.262-1.259" />
        </g>
    )
}

function Calendar() {
    return (
        <>
            <path d="M16 2v4M8 2v4M3 9h18M19 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
            <path d="M12 12.7a.3.3 0 1 0 .3.3.3.3 0 0 0-.3-.3M17 12.7a.3.3 0 1 0 .3.3.3.3 0 0 0-.3-.3M7 16.7a.3.3 0 1 0 .3.3.3.3 0 0 0-.3-.3M12 16.7a.3.3 0 1 0 .3.3.3.3 0 0 0-.3-.3" />
        </>
    )
}

function MagnifyingGlass() {
    return (
        <path d="M15.7 6.8a6.3 6.3 0 1 1-8.9 9 6.3 6.3 0 0 1 9-9M19 19l-3.3-3.3" />
    )
}

function Sort() {
    return (
        <path d="M18 3v17M3 20h9M5 16h7M7 12h5M8.4 8H12M15.5 5.5 18 3l2.5 2.5" />
    )
}

function SortDescending() {
    return (
        <path d="M18 21V4M3 4h9M5 8h7M7 12h5M8.4 16H12M18 21l2.5-2.5M15.5 18.5 18 21" />
    )
}

function SwitchHorizontal1() {
    return <path d="M20 17H4m0 0 4-4m-4 4 4 4M4 7h16m0 0-4-4m4 4-4 4" />
}

function EmptyCircle() {
    return <circle cx="12" cy="12" r="9.6" />
}

function Status() {
    return <circle cx="9" cy="10" r="3" fill="currentColor" />
}

const getStrokeWidth = (size) => {
    if (size === 'xs') {
        return 2.25
    }
    if (size === 'sm') {
        return 2
    }
    if (size === 'lg') {
        return 1.5
    }
    if (size === 'xl') {
        return 1.25
    }
    if (size === '2xl') {
        return 1
    }
    return 1.75 // md
}

const iconVariant = cva('', {
    variants: {
        size: {
            xs: 'h-4 w-4',
            sm: 'h-5 w-5',
            md: 'h-6 w-6',
            lg: 'h-8 w-8',
            xl: 'h-10 w-10',
            '2xl': 'h-12 w-12',
            '3xl': 'h-24 w-24',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

function Icon({ name, size, className, ...props }) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={getStrokeWidth(size)}
            viewBox="0 0 24 24"
            className={iconVariant({
                size,
                className,
            })}
            {...props}
        >
            {(() => {
                switch (name) {
                    case 'spinner':
                        return <Spinner />
                    case 'arrow-left':
                        return <ArrowLeft />
                    case 'arrow-right':
                        return <ArrowRight />
                    case 'bar-chart':
                        return <BarChart />
                    case 'building-1':
                        return <Building1 />
                    case 'building-5':
                        return <Building5 />
                    case 'settings':
                        return <Settings />
                    case 'check-circle':
                        return <CheckCircle />
                    case 'check-circle-1':
                        return <CheckCircle1 />
                    case 'check-done':
                        return <CheckDone />
                    case 'chevron-left':
                        return <ChevronLeft />
                    case 'chevron-right':
                        return <ChevronRight />
                    case 'chevron-down':
                        return <ChevronDown />
                    case 'chevron-up':
                        return <ChevronUp />
                    case 'chevron-up-down':
                        return <ChevronUpDown />
                    case 'close':
                        return <Close />
                    case 'users':
                        return <Users />
                    case 'user':
                        return <User />
                    case 'user-plus-1':
                        return <UserPlus1 />
                    case 'plus':
                        return <Plus />
                    case 'upload':
                        return <Upload />
                    case 'info-circle':
                        return <InfoCircle />
                    case 'user-square':
                        return <UserSquare />
                    case 'layers':
                        return <Layers />
                    case 'exclamation':
                        return <Exclamation />
                    case 'file':
                        return <File />
                    case 'logout':
                        return <Logout />
                    case 'logout-1':
                        return <Logout1 />
                    case 'send':
                        return <Send />
                    case 'send-1':
                        return <Send1 />
                    case 'check':
                        return <Check />
                    case 'calendar':
                        return <Calendar />
                    case 'dots-vertical':
                        return <DotsVertical />
                    case 'pencil-2':
                        return <Pencil2 />
                    case 'trash-1':
                        return <Trash1 />
                    case 'mail-1':
                        return <Mail1 />
                    case 'alarm-check':
                        return <AlarmCheck />
                    case 'switch-horizontal-1':
                        return <SwitchHorizontal1 />
                    case 'magnifying-glass':
                        return <MagnifyingGlass />
                    case 'sort-descending':
                        return <SortDescending />
                    case 'sort':
                        return <Sort />
                    case 'empty-circle':
                        return <EmptyCircle />
                    case 'exclamation-circle':
                        return <ExclamationCircle />
                    case 'status':
                        return <Status />
                    default:
                        // eslint-disable-next-line no-console
                        console.warning(`No icon found with the name: ${name}`)
                        return null
                }
            })()}
        </svg>
    )
}

export default Icon
