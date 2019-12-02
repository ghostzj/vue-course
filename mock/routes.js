// routes.js
module.exports = {
  '/school/list': '/getSchoolList',
  '/school/list?id=school1': '/getSchoolList',
  '/teacher/list': '/getTeacherList',
  '/course/list': '/getCourseList',
  '/term/get_termAndYear_startTime': '/getTermAndStartTime',
  '/statistic/get_data': '/getStatNoSetList',
  '/statistic/get_data_list': '/getStatSetList',
  '/statistic_activity_time/course_activity_time_data': '/getBehaviorTimeList',
  '/statistic_activity/course_activity_data': '/getBehaviorCountList',
};
