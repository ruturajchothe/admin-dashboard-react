import React from "react";

const NotificationCard = (props) => {
  return (
    <>
      <div class="col-xl-3 col-md-6 mb-4" style={{"cursor":"pointer"}} onClick= {() => (props.handleClick(props.data.value))}>
        <div className={`card border-left-${props.data.color} shadow h-100 py-2`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div className={`text-xs font-weight-bold text-${props.data.color} text-uppercase mb-1`}>
                  {props.data.cardTitle}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {props.data.currency}{props.data.value}
                </div>
              </div>
              <div class="col-auto">
                <i class={`fas ${props.data.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
