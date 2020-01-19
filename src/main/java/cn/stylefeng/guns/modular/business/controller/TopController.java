package cn.stylefeng.guns.modular.business.controller;

import cn.stylefeng.guns.core.log.LogObjectHolder;
import cn.stylefeng.guns.modular.business.service.ICreditinfoService;
import cn.stylefeng.guns.modular.system.model.Creditinfo;
import cn.stylefeng.roses.core.base.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

/**
 * 信用信息控制器
 *
 * @author fengshuonan
 * @Date 2020-01-16 14:09:47
 */
@Controller
@RequestMapping("/top")
public class TopController extends BaseController {

    private String PREFIX = "/business/top/";

    @Autowired
    private ICreditinfoService creditinfoService;

    /**
     * 跳转到信用信息首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "index.html";
    }

    /**
     * 跳转到添加信用信息
     */
    @RequestMapping("/list")
    public String creditinfoList() {
        return PREFIX + "creditList.html";
    }

    /**
     * 跳转到添加信用信息
     */
    @RequestMapping("/detail")
    public String creditinfoDetail() {
        return PREFIX + "creditDetail.html";
    }

}
